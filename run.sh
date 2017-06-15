#!/bin/bash

cd iowacodecamp-mobile
npm install
./node_modules/ember-cli/bin/ember build
cd ..

cd iccmobile-server
npm install
cp -r ../iowacodecamp-mobile/dist public
