package com.hspinlynfczlbutb

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UhspinlynfczlbutbserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAhspinlynfczlbutbper"
    }

    @ReactMethod
    fun getAndrhspinlynfczlbutboidUserAgent(promise: Promise) {
        try {
            val contextIhspinlynfczlbutb = reactApplicationContext.applicationContext
            val userAgentIhspinlynfczlbutb = WebSettings.getDefaultUserAgent(contextIhspinlynfczlbutb)
            promise.resolve(userAgentIhspinlynfczlbutb ?: "")
        } catch (eIhspinlynfczlbutb: Exception) {
            // android.util.Log.e("UserAhspinlynfczlbutbperModule", "Error getting UserAgent: ${eIhspinlynfczlbutb.message}")
            promise.resolve("")
        }
    }
}
