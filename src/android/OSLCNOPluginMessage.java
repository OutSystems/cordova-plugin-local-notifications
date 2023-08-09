package de.appplant.cordova.plugin.localnotification;

import org.json.JSONException;
import org.json.JSONObject;

abstract class OSLCNOPluginMessage {

    private final String code;
    private final String message;

    public String getCode() { return code; }
    public String getMessage() { return message; }

    public OSLCNOPluginMessage(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public JSONObject toJSONObject() {
        JSONObject jsonResult = new JSONObject();
        try {
            jsonResult.put("code", code);
            jsonResult.put("message", message);
            return jsonResult;
        } catch (JSONException e) {
            // should never happen
            return null;
        }
    }

}
