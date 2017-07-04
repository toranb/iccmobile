//
//  ViewController.m
//  iccmobile-ios
//
//  Created by Toran Billups on 7/19/16.
//  Copyright © 2016 Epic Software Development. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController
@synthesize viewWeb;
@synthesize goBack;
@synthesize spinner;
@synthesize lastKnownUrl;

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];

    NSString *deviceModel = (NSString*)[UIDevice currentDevice].model;
    if ([deviceModel rangeOfString:@"iPad"].location != NSNotFound)  {
        [self.viewWeb setFrame:CGRectMake(0, 20, CGRectGetWidth(self.view.frame), CGRectGetHeight(self.view.frame))];
    }
}

- (void)viewDidLoad {
    [super viewDidLoad];
    NSString *fullUrl = @"https://iccmobile.herokuapp.com";
    NSURL *url = [NSURL URLWithString:fullUrl];
    [viewWeb loadRequest:[NSURLRequest requestWithURL:url]];
    viewWeb.delegate = self;
    viewWeb.scrollView.bounces = NO;
}

- (IBAction)backButtonTapped:(id)sender {
    if ([lastKnownUrl isEqualToString:@"https://iccmobile.herokuapp.com/#/sessions"]) {
        [goBack setHidden:NO];
    }else{
        [goBack setHidden:YES];
    }
    [viewWeb goBack];
}

- (void)webViewDidFinishLoad:(UIWebView *)webView {
    [spinner setHidden:YES];
}

- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType {
    NSString *theUrl = request.URL.absoluteString;
    lastKnownUrl = theUrl;
    if ([theUrl isEqualToString:@"https://iccmobile.herokuapp.com/#/sessions"]) {
        [goBack setHidden:YES];
    }else if ([theUrl isEqualToString:@"https://iccmobile.herokuapp.com/"]) {
        [goBack setHidden:YES];
    }else{
        [goBack setHidden:NO];
    }
    return YES;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

@end
