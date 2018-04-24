//
//  ViewController.m
//  iccmobile-ios
//
//  Created by Toran Billups on 7/19/16.
//  Copyright © 2016 Epic Software Development. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property (strong, nonatomic) UIActivityIndicatorView *activityView;

@end

@implementation ViewController
@synthesize goBack;

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self createActivityView];
    [self.view addSubview:self.activityView];
    
    WKWebView *webView = [self createWebView];
    [self.view addSubview:webView];
}

- (WKWebView *)createWebView {
    WKWebView *webView = [[WKWebView alloc] initWithFrame:self.view.frame];
    [webView setFrame:CGRectMake(0,-80,self.view.frame.size.width,self.view.frame.size.height+80)];
    
    webView.hidden = YES;
    webView.UIDelegate = self;
    webView.navigationDelegate = self;
    webView.scrollView.bounces = NO;
    webView.allowsBackForwardNavigationGestures = NO;
    
    NSString *fullUrl = @"https://iccmobile.herokuapp.com";
    NSURL *url = [NSURL URLWithString:fullUrl];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    
    [webView loadRequest:request];
    
    return webView;
}

- (void)createActivityView {
    self.activityView = [[UIActivityIndicatorView alloc] initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleGray];
    self.activityView.center = self.view.center;
    self.activityView.hidesWhenStopped = true;
    self.activityView.autoresizingMask = UIViewAutoresizingFlexibleBottomMargin|UIViewAutoresizingFlexibleTopMargin|UIViewAutoresizingFlexibleLeftMargin|UIViewAutoresizingFlexibleRightMargin;
    [self.activityView startAnimating];
}

- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation {
    [self.activityView stopAnimating];
    [webView setHidden:NO];
}

@end
