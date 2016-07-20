//
//  ViewController.h
//  iccmobile-ios
//
//  Created by Toran Billups on 7/19/16.
//  Copyright © 2016 Epic Software Development. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController <UIWebViewDelegate>
@property (strong, nonatomic) IBOutlet UIWebView *viewWeb;
@property (strong, nonatomic) IBOutlet UIButton *goBack;
@property (strong, nonatomic) IBOutlet UIActivityIndicatorView *spinner;

@property (strong, nonatomic) NSString *lastKnownUrl;
- (void)webViewDidFinishLoad:(UIWebView *)webView;


@end

