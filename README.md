<h1 align="center">
<sub>
<img alt="Logo" src="/src/img/logo.png"
    width="400"/>
</sub>
</h1>

Online services of the Technical University of Vienna (TU Wien) have infuriatingly short session times. TISS Auto Login is a small and simple Chrome Extension that combats this high priority issue by automatically logging you back into TUWEL and TISS.

Simply provide your login credentials and TISS Auto Login will do all the hard work for you.

## Installation
Quick-ish method:
- Download `tiss-auto-login_X.X.X.crx` ([latest release desirable](https://github.com/lforst/tiss-auto-login/releases)).
- Go to your Chrome *Extensions*. (chrome://extensions/)
- Click to check *Developer mode*.
- Now drag and drop the `tiss-auto-login.crx` file into the chrome window. Make sure you are still on the extensions page!
- Click on *Add extension*.

Normal method:
- Download and unzip `tiss-auto-login_X.X.X.zip` ([latest release desirable](https://github.com/lforst/tiss-auto-login/releases)).
- Rename the unzipped directory to `tiss-auto-login`
- Go to chrome *Extensions*. (chrome://extensions/)
- Click to check *Developer mode*.
- Click *Load unpacked extension...*.
- In the file selector dialog:
    - Select the directory `tiss-auto-login` which was created above.
    - Click *Open*.  

TISS Auto Login is now available in your Chrome browser.

## Usage
Before the extension will work you need to set the credentials the extension will log you in with. You can do this by going to the extension's option page:
- Right-click on its icon in the upper right corner of your browser.
- Select options.

After you're done, make sure to enable the extension by ticking the checkmark in the popup that opens up when you click on its icon.

## Notice

### Your login data
Your credentials will be synchronized between your chrome instances. They will be slightly obfuscated and need to be stored locally.

Please note that sadly, there is no way for this extension to safely encrypt this data, so keep people away from your computer!

### Affiliation with the Technical University of Vienna (TU Wien)
This extension (TISS Auto Login) is in no way affiliated with TISS (TU Wien Informations-Systeme & Services), the Technical University of Vienna (TU Wien) or any of its services. This is a private project of a student of the Technical University of Vienna under the MIT License.

## Contribuiting
If you have ideas on how to improve this extension feel free to open an Issue or create a pull request!

Current issues you can help with:
- Encrypt user data
- Make options page / popup prettier