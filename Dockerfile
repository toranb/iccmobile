FROM node:4

COPY . /iccmobile
WORKDIR /iccmobile

RUN cd iowacodecamp-mobile; npm install; npm install bower; ./node_modules/bower/bin/bower install; ./node_modules/ember-cli/bin/ember build; cd ..
RUN cd iccmobile-server; npm install; mkdir views; cd views; cp ../../iowacodecamp-mobile/dist/index.html index.hbs; cd ..; mkdir public; cd public; cp -r ../../iowacodecamp-mobile/dist/assets .; cp -r ../../iowacodecamp-mobile/dist/fonts .; cd ..

EXPOSE  8080

CMD ["node", "/iccmobile/iccmobile-server/index.js"]
