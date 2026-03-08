<?php
/**
 * RenovLaser - Traitement du formulaire de contact
 * Gère l'envoi d'emails avec pièces jointes
 */

// Activer l'affichage des erreurs pour debug
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Configuration
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

// Wrapper pour capturer toutes les erreurs
try {

// Configuration email
define('EMAIL_DESTINATAIRE', 'contact@renovlaser.fr'); // Email de destination
define('EMAIL_COPIE', ''); // Email en copie (optionnel)
define('TAILLE_MAX_FICHIER', 25 * 1024 * 1024); // 25 Mo
define('NOMBRE_MAX_FICHIERS', 5);

// Fonction de nettoyage des données
function nettoyer($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

// Fonction de validation d'email
function validerEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Fonction de validation de téléphone
function validerTelephone($tel) {
    return preg_match('/^[0-9+ ()-]{8,}$/', $tel);
}

// Vérification de la méthode POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Récupération et nettoyage des données
$nom = isset($_POST['nom']) ? nettoyer($_POST['nom']) : '';
$adresse = isset($_POST['adresse']) ? nettoyer($_POST['adresse']) : '';
$telephone = isset($_POST['telephone']) ? nettoyer($_POST['telephone']) : '';
$message = isset($_POST['message']) ? nettoyer($_POST['message']) : '';
$rgpd = isset($_POST['rgpd']) ? $_POST['rgpd'] : '';
$utm_source = isset($_POST['utm_source']) ? nettoyer($_POST['utm_source']) : '';
$utm_campaign = isset($_POST['utm_campaign']) ? nettoyer($_POST['utm_campaign']) : '';

// Validation des champs obligatoires
$erreurs = [];

if (empty($nom)) {
    $erreurs[] = 'Le nom est obligatoire';
}

if (empty($adresse)) {
    $erreurs[] = 'L\'adresse est obligatoire';
}

if (empty($telephone)) {
    $erreurs[] = 'Le téléphone est obligatoire';
} elseif (!validerTelephone($telephone)) {
    $erreurs[] = 'Le format du téléphone est invalide';
}

if (empty($message)) {
    $erreurs[] = 'Le message est obligatoire';
}

if ($rgpd !== 'on' && $rgpd !== '1') {
    $erreurs[] = 'Vous devez accepter la politique de confidentialité';
}

// Si erreurs, retourner
if (!empty($erreurs)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode('. ', $erreurs)]);
    exit;
}

// Protection anti-spam basique (honeypot virtuel)
if (isset($_POST['website']) && !empty($_POST['website'])) {
    // Champ honeypot rempli = probablement un bot
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam détecté']);
    exit;
}

// Gestion des fichiers
$fichiers = [];
$erreursFichiers = [];

if (isset($_FILES['fichiers']) && is_array($_FILES['fichiers']['name']) && !empty($_FILES['fichiers']['name'][0])) {
    $files = $_FILES['fichiers'];
    $nombreFichiers = is_array($files['name']) ? count($files['name']) : 0;

    if ($nombreFichiers > NOMBRE_MAX_FICHIERS) {
        $erreursFichiers[] = 'Maximum ' . NOMBRE_MAX_FICHIERS . ' fichiers autorisés';
    } else {
        for ($i = 0; $i < $nombreFichiers; $i++) {
            if ($files['error'][$i] === UPLOAD_ERR_OK) {
                // Vérification taille
                if ($files['size'][$i] > TAILLE_MAX_FICHIER) {
                    $erreursFichiers[] = 'Le fichier "' . $files['name'][$i] . '" dépasse 25 Mo';
                    continue;
                }

                // Vérification type MIME
                $finfo = finfo_open(FILEINFO_MIME_TYPE);
                $mimeType = finfo_file($finfo, $files['tmp_name'][$i]);
                finfo_close($finfo);

                $typesAutorises = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/quicktime', 'application/pdf'];

                if (!in_array($mimeType, $typesAutorises)) {
                    $erreursFichiers[] = 'Type de fichier non autorisé pour "' . $files['name'][$i] . '"';
                    continue;
                }

                $fichiers[] = [
                    'name' => $files['name'][$i],
                    'tmp_name' => $files['tmp_name'][$i],
                    'type' => $mimeType,
                    'size' => $files['size'][$i]
                ];
            }
        }
    }
}

if (!empty($erreursFichiers)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode('. ', $erreursFichiers)]);
    exit;
}

// Préparation de l'email
$sujet = '🔧 RenovLaser - Nouvelle demande de devis';
$boundary = md5(time());

// En-têtes
$headers = "From: RenovLaser <noreply@renovlaser.fr>\r\n";
$headers .= "Reply-To: RenovLaser <" . EMAIL_DESTINATAIRE . ">\r\n";
if (!empty(EMAIL_COPIE)) {
    $headers .= "Cc: " . EMAIL_COPIE . "\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Corps de l'email
$corps = "--{$boundary}\r\n";
$corps .= "Content-Type: text/html; charset=UTF-8\r\n";
$corps .= "Content-Transfer-Encoding: 8bit\r\n\r\n";

// Message HTML
$messageHTML = "
<!DOCTYPE html>
<html lang='fr'>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8A9A7C, #5E6C53); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #fff; padding: 20px; border: 2px solid #8A9A7C; border-top: none; border-radius: 0 0 8px 8px; }
        .info-row { margin: 15px 0; padding: 12px; background: #f9f9f9; border-left: 4px solid #8A9A7C; border-radius: 4px; }
        .info-row strong { color: #5E6C53; }
        .message-box { background: #FAF9F6; padding: 15px; border-radius: 6px; margin: 15px 0; border: 1px solid #ddd; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee; font-size: 12px; color: #666; text-align: center; }
        .utm-info { background: #e9ecef; padding: 10px; border-radius: 4px; font-size: 12px; margin-top: 15px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>🔧 Nouvelle demande de devis</h1>
            <p style='margin: 5px 0 0 0; font-size: 14px;'>RenovLaser - Décapage laser écologique</p>
        </div>
        <div class='content'>
            <div class='info-row'>
                <strong>👤 Nom :</strong> {$nom}
            </div>
            <div class='info-row'>
                <strong>📍 Adresse d'intervention :</strong> {$adresse}
            </div>
            <div class='info-row'>
                <strong>📞 Téléphone :</strong> <a href='tel:{$telephone}'>{$telephone}</a>
            </div>
            <div class='message-box'>
                <strong>💬 Message :</strong><br><br>
                " . nl2br($message) . "
            </div>";

if (count($fichiers) > 0) {
    $messageHTML .= "
            <div class='info-row'>
                <strong>📎 Fichiers joints :</strong> " . count($fichiers) . " fichier(s)
            </div>";
}

if (!empty($utm_source) || !empty($utm_campaign)) {
    $messageHTML .= "
            <div class='utm-info'>
                <strong>📊 Tracking :</strong><br>";
    if (!empty($utm_source)) {
        $messageHTML .= "Source : {$utm_source}<br>";
    }
    if (!empty($utm_campaign)) {
        $messageHTML .= "Campagne : {$utm_campaign}";
    }
    $messageHTML .= "
            </div>";
}

$messageHTML .= "
        </div>
        <div class='footer'>
            <p>Formulaire envoyé depuis <strong>www.renovlaser.fr</strong></p>
            <p>Date : " . date('d/m/Y à H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

$corps .= $messageHTML . "\r\n";

// Ajout des pièces jointes
foreach ($fichiers as $fichier) {
    $contenuFichier = chunk_split(base64_encode(file_get_contents($fichier['tmp_name'])));

    $corps .= "--{$boundary}\r\n";
    $corps .= "Content-Type: {$fichier['type']}; name=\"{$fichier['name']}\"\r\n";
    $corps .= "Content-Transfer-Encoding: base64\r\n";
    $corps .= "Content-Disposition: attachment; filename=\"{$fichier['name']}\"\r\n\r\n";
    $corps .= $contenuFichier . "\r\n";
}

$corps .= "--{$boundary}--";

// Envoi de l'email
// OVH nécessite le paramètre -f pour spécifier l'expéditeur
$parametresSupplementaires = '-f noreply@renovlaser.fr';
$emailEnvoye = mail(EMAIL_DESTINATAIRE, $sujet, $corps, $headers, $parametresSupplementaires);

// Log de la demande (optionnel - pour garder une trace)
$logEntry = date('Y-m-d H:i:s') . " | {$nom} | {$telephone} | {$adresse}\n";
@file_put_contents('contact-logs.txt', $logEntry, FILE_APPEND);

// Réponse
if ($emailEnvoye) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '✅ Merci ! Votre demande a été envoyée. Nous vous recontactons sous 24h.'
    ]);
} else {
    // Récupérer la dernière erreur pour debug
    $lastError = error_get_last();
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement.',
        'debug' => [
            'error' => $lastError ? $lastError['message'] : 'mail() returned false',
            'php_version' => phpversion()
        ]
    ]);
}

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur serveur: ' . $e->getMessage(),
        'debug' => [
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ]
    ]);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur fatale: ' . $e->getMessage(),
        'debug' => [
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ]
    ]);
}
?>
