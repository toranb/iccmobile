package com.iccmobile.android;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageButton;

public class MainActivity extends AppCompatActivity {

    String lastKnownUrl;
    ImageButton imgButton;
    WebView webView;

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if ((keyCode == KeyEvent.KEYCODE_BACK) && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = (WebView) findViewById(R.id.webView);
        webView.setScrollBarStyle(WebView.SCROLLBARS_OUTSIDE_OVERLAY);

        WebSettings webSettings = webView.getSettings();
        webSettings.setBuiltInZoomControls(false);
        webSettings.setJavaScriptEnabled(true);

        webView.loadUrl("https://iccmobile.herokuapp.com/");

        imgButton = (ImageButton) findViewById(R.id.imageButton);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                lastKnownUrl = url;

                if (url.equals("https://iccmobile.herokuapp.com/#/sessions")) {
                    imgButton.setVisibility(View.GONE);
                }else if (url.equals("https://iccmobile.herokuapp.com/")) {
                    imgButton.setVisibility(View.GONE);
                }else{
                    imgButton.setVisibility(View.VISIBLE);
                }

            };
        });

        imgButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (lastKnownUrl.equals("https://iccmobile.herokuapp.com/#/sessions")) {
                    imgButton.setVisibility(View.VISIBLE);
                }else{
                    imgButton.setVisibility(View.GONE);
                }

                webView.goBack();
            }
        });
    }
}
