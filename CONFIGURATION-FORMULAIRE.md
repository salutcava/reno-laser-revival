# Configuration du Formulaire de Contact RenovLaser

## ✅ Ce qui a été fait

Le formulaire de contact est maintenant **entièrement fonctionnel** avec :

1. **Script PHP** (`submit-contact.php`) qui gère :
   - ✅ Réception des données du formulaire
   - ✅ Validation côté serveur (nom, adresse, téléphone, message, RGPD)
   - ✅ Gestion des fichiers joints (max 5 fichiers, 25 Mo chacun)
   - ✅ Envoi d'email HTML formaté avec pièces jointes
   - ✅ Protection anti-spam basique
   - ✅ Tracking UTM (source et campagne)
   - ✅ Logs des demandes
   - ✅ Réponses JSON pour le frontend

2. **Script JavaScript** (`assets/js/contact-form.js`) qui gère :
   - ✅ Capture des paramètres UTM
   - ✅ Validation côté client
   - ✅ Envoi asynchrone (AJAX)
   - ✅ Gestion des fichiers
   - ✅ Messages de succès/erreur
   - ✅ Désactivation du bouton pendant l'envoi

---

## 🔧 Configuration requise

### 1. Modifier l'email destinataire

Ouvrez le fichier [`submit-contact.php`](submit-contact.php) et modifiez la ligne 11 :

```php
define('EMAIL_DESTINATAIRE', 'contact@renovlaser.fr'); // ← Remplacez par VOTRE email
```

**Optionnel** : Ajoutez un email en copie (ligne 12) :
```php
define('EMAIL_COPIE', 'olivier@votredomaine.fr'); // ← Email secondaire
```

### 2. Configuration du serveur

Le script PHP nécessite :
- **PHP 7.0+** (recommandé : PHP 8.0+)
- **Fonction `mail()` activée** sur le serveur
- **Permissions d'écriture** pour créer `contact-logs.txt`

### 3. Tester en local (optionnel)

Pour tester en local, vous aurez besoin d'un serveur PHP :

```bash
# Option 1 : Serveur PHP intégré
cd /chemin/vers/renovlaser
php -S localhost:8000

# Puis ouvrir : http://localhost:8000
```

**Note** : En local, la fonction `mail()` ne fonctionnera probablement pas. Pour tester l'envoi d'emails, vous devrez :
- Utiliser un service SMTP (ex: Mailtrap, MailHog)
- Ou tester directement sur votre serveur de production

---

## 📤 Déploiement sur votre hébergement

### Étapes :

1. **Uploadez tous les fichiers** sur votre hébergeur (FTP/SFTP)
   - `submit-contact.php` à la racine
   - `assets/js/contact-form.js` (déjà modifié)
   - `index.html` (déjà configuré)

2. **Vérifiez les permissions** du fichier PHP :
   ```bash
   chmod 644 submit-contact.php
   ```

3. **Testez le formulaire** :
   - Allez sur votre site : `https://www.renovlaser.fr`
   - Remplissez le formulaire
   - Vérifiez que vous recevez bien l'email

---

## 🧪 Test du formulaire

### Checklist de test :

- [ ] Le formulaire affiche bien "Envoi en cours..." au clic
- [ ] Vous recevez un email à l'adresse configurée
- [ ] L'email contient toutes les informations (nom, adresse, téléphone, message)
- [ ] Les fichiers joints sont bien reçus
- [ ] Le message de succès s'affiche après l'envoi
- [ ] Le formulaire se réinitialise après envoi réussi

### En cas de problème :

**Problème** : "Erreur de connexion"
- Vérifiez que `submit-contact.php` est bien à la racine du site
- Vérifiez les permissions du fichier
- Consultez les logs d'erreur PHP de votre hébergeur

**Problème** : "Email non reçu"
- Vérifiez que la fonction `mail()` est activée sur votre serveur
- Vérifiez vos spams/courrier indésirable
- Vérifiez que l'email destinataire est correct dans le PHP
- Consultez `contact-logs.txt` pour voir si la demande a été enregistrée

**Problème** : "Fichiers non reçus"
- Vérifiez les limites d'upload PHP : `upload_max_filesize` et `post_max_size`
- Augmentez-les si nécessaire dans `php.ini` ou `.htaccess`

---

## 🔒 Sécurité

Le script inclut déjà :
- ✅ Validation et nettoyage des données
- ✅ Protection XSS (htmlspecialchars)
- ✅ Validation des types MIME des fichiers
- ✅ Limitation de la taille et du nombre de fichiers
- ✅ Protection anti-spam basique (honeypot)

### Pour améliorer la sécurité (optionnel) :

1. **Ajouter un CAPTCHA** (Google reCAPTCHA v3)
2. **Limiter le taux d'envoi** (rate limiting)
3. **Utiliser SMTP** au lieu de `mail()` (plus fiable)

---

## 📊 Logs des demandes

Chaque demande est enregistrée dans `contact-logs.txt` avec :
- Date et heure
- Nom du contact
- Téléphone
- Adresse

**Attention** : Ce fichier peut devenir volumineux. Pensez à le vider régulièrement.

---

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs d'erreur PHP de votre hébergeur
2. Testez avec un email de test simple
3. Contactez votre hébergeur pour vérifier la configuration PHP

---

## 📝 Prochaines améliorations possibles

- [ ] Ajouter Google reCAPTCHA v3
- [ ] Utiliser PHPMailer pour un envoi SMTP plus fiable
- [ ] Créer une page d'administration pour consulter les demandes
- [ ] Envoyer un email de confirmation au client
- [ ] Intégrer avec un CRM (HubSpot, Pipedrive, etc.)

---

**Dernière mise à jour** : 21/10/2025
