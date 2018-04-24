//
//  ViewController.h
//  iccmobile-ios
//
//  Created by Toran Billups on 7/19/16.
//  Copyright © 2016 Epic Software Development. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

@interface ViewController : UIViewController <WKNavigationDelegate, WKUIDelegate>
@property (strong, nonatomic) IBOutlet UIButton *goBack;

@end

