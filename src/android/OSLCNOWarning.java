package de.appplant.cordova.plugin.localnotification;

public class OSLCNOWarning extends OSLCNOPluginMessage {

    public OSLCNOWarning(String code, String message) {
        super(code, message);
    }

    static OSLCNOWarning EXACT_PERMISSION =
            new OSLCNOWarning("OSLCNO-002","Unable to schedule an exact alarm due to lack of permissions. We scheduled it as an inexact alarm instead.");

}
