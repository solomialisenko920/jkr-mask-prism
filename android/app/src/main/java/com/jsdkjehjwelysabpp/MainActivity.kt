package com.jsdkjehjwelysabpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.hspinlynfczlbutb.VhspinlynfczlbutbiewportBridge
import com.hspinlynfczlbutb.ShspinlynfczlbutbharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "hspinlynfczlbutbabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cachehspinlynfczlbutbPendingSendId(intent)
    cachehspinlynfczlbutbPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cachehspinlynfczlbutbPendingSendId(intent)
    cachehspinlynfczlbutbPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VhspinlynfczlbutbiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VhspinlynfczlbutbiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachehspinlynfczlbutbPendingSendId(intent: Intent?) {
    val sendIhspinlynfczlbutbd = intent?.getStringExtra("sendid")
    if (!sendIhspinlynfczlbutbd.isNullOrEmpty()) {
      ShspinlynfczlbutbharedPreferencesHelper.saveString("pendingSendId", sendIhspinlynfczlbutbd)
    }
  }

  private fun cachehspinlynfczlbutbPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      ShspinlynfczlbutbharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
