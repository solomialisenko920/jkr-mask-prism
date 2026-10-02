package com.hspinlynfczlbutb

import android.opengl.GLES20
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class AhspinlynfczlbutbppInfoModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AhspinlynfczlbutbppInfoModule"
    }

    @ReactMethod
    fun getPachspinlynfczlbutbkageName(promise: Promise) {
        try {
            val packageNahspinlynfczlbutbme = reactApplicationContext.packageName
            promise.resolve(packageNahspinlynfczlbutbme ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AhspinlynfczlbutbppInfoHelper", "Error getting package name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getVehspinlynfczlbutbrsionCode(promise: Promise) {
        try {
            val packageIhspinlynfczlbutbfo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIhspinlynfczlbutbfo.versionCode)
        } catch (e: Exception) {
            // android.util.Log.e("AhspinlynfczlbutbppInfoHelper", "Error getting version code: ${e.message}")
            promise.resolve(0)
        }
    }

    @ReactMethod
    fun getVehspinlynfczlbutbrsionName(promise: Promise) {
        try {
            val packageIhspinlynfczlbutbfo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIhspinlynfczlbutbfo.versionName ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AhspinlynfczlbutbppInfoHelper", "Error getting version name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getGlRenderer(promise: Promise) {
        try {
            promise.resolve(readGlRendererString())
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingSenhspinlynfczlbutbdId(promise: Promise) {
        try {
            var sendIhspinlynfczlbutbd = ""
            val activityIhspinlynfczlbutb = reactApplicationContext.currentActivity
            val intentIhspinlynfczlbutb = activityIhspinlynfczlbutb?.intent
            val intentSendIhspinlynfczlbutbd = intentIhspinlynfczlbutb?.getStringExtra("sendid")

            if (!intentSendIhspinlynfczlbutbd.isNullOrBlank()) {
                sendIhspinlynfczlbutbd = intentSendIhspinlynfczlbutbd
                intentIhspinlynfczlbutb?.removeExtra("sendid")
            } else {
                val storedIhspinlynfczlbutb = ShspinlynfczlbutbharedPreferencesHelper.loadString("pendingSendId", "")
                if (!storedIhspinlynfczlbutb.isNullOrBlank()) {
                    sendIhspinlynfczlbutbd = storedIhspinlynfczlbutb
                }
            }

            if (sendIhspinlynfczlbutbd.isNotEmpty()) {
                ShspinlynfczlbutbharedPreferencesHelper.removeKey("pendingSendId")
            }
            promise.resolve(sendIhspinlynfczlbutbd)
        } catch (e: Exception) {
            // android.util.Log.e("AhspinlynfczlbutbppInfoHelper", "Error getting pending sendIhspinlynfczlbutbdId: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingPushUrl(promise: Promise) {
        try {
            var pushUrl = ""
            val activityIhspinlynfczlbutb = reactApplicationContext.currentActivity
            val intentIhspinlynfczlbutb = activityIhspinlynfczlbutb?.intent
            val intentPushUrl = intentIhspinlynfczlbutb?.getStringExtra("url")

            if (!intentPushUrl.isNullOrBlank()) {
                pushUrl = intentPushUrl
                intentIhspinlynfczlbutb?.removeExtra("url")
            } else {
                val storedIhspinlynfczlbutb = ShspinlynfczlbutbharedPreferencesHelper.loadString("pendingPushUrl", "")
                if (!storedIhspinlynfczlbutb.isNullOrBlank()) {
                    pushUrl = storedIhspinlynfczlbutb
                }
            }

            if (pushUrl.isNotEmpty()) {
                ShspinlynfczlbutbharedPreferencesHelper.removeKey("pendingPushUrl")
            }
            promise.resolve(pushUrl)
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    fun readGlRendererString(): String {
    val egl = EGLContext.getEGL() as EGL10
    val display = egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY)
    if (display === EGL10.EGL_NO_DISPLAY) {
    return ""
    }

    val version = IntArray(2)
    if (!egl.eglInitialize(display, version)) {
    return ""
    }

    val attribList = intArrayOf(
    EGL10.EGL_RED_SIZE, 8,
    EGL10.EGL_GREEN_SIZE, 8,
    EGL10.EGL_BLUE_SIZE, 8,
    EGL10.EGL_ALPHA_SIZE, 8,
    EGL10.EGL_RENDERABLE_TYPE, 4,
    EGL10.EGL_NONE,
    )
    val configs = arrayOfNulls<EGLConfig>(1)
    val numConfigs = IntArray(1)
    if (!egl.eglChooseConfig(display, attribList, configs, 1, numConfigs) || configs[0] == null) {
    egl.eglTerminate(display)
    return ""
    }

    val contextAttribs = intArrayOf(0x3098, 2, EGL10.EGL_NONE)
    val context = egl.eglCreateContext(
    display,
    configs[0],
    EGL10.EGL_NO_CONTEXT,
    contextAttribs,
    )
    if (context === EGL10.EGL_NO_CONTEXT) {
    egl.eglTerminate(display)
    return ""
    }

    val surfaceAttribs = intArrayOf(EGL10.EGL_WIDTH, 1, EGL10.EGL_HEIGHT, 1, EGL10.EGL_NONE)
    val surface = egl.eglCreatePbufferSurface(display, configs[0], surfaceAttribs)
    if (surface === EGL10.EGL_NO_SURFACE) {
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    return ""
    }

    var renderer = ""
    try {
    if (egl.eglMakeCurrent(display, surface, surface, context)) {
    renderer = GLES20.glGetString(GLES20.GL_RENDERER) ?: ""
    }
    } finally {
    egl.eglMakeCurrent(
    display,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_CONTEXT,
    )
    egl.eglDestroySurface(display, surface)
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    }

    return renderer
    }
}
