FROM node:6

COPY . /iccmobile
WORKDIR /iccmobile

RUN cd iowacodecamp-mobile; npm install; ./node_modules/bower/bin/bower --allow-root install; ./node_modules/ember-cli/bin/ember build --env=production; cd ..
RUN cd iccmobile-server; npm install; mkdir public; cd public; cp ../../iowacodecamp-mobile/dist/index.html .; cp -r ../../iowacodecamp-mobile/dist/assets .; cp -r ../../iowacodecamp-mobile/dist/fonts .; cp -r ../../iowacodecamp-mobile/dist/images .; cp -r ../../iowacodecamp-mobile/dist/sw.js .;cp -r ../../iowacodecamp-mobile/dist/sw-registration.js .

EXPOSE  8080

CMD ["node", "/iccmobile/iccmobile-server/index.js"]
