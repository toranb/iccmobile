FROM node:6

COPY . /iccmobile
WORKDIR /iccmobile

RUN cd iowacodecamp-mobile; npm install; ./node_modules/bower/bin/bower --allow-root install; ./node_modules/ember-cli/bin/ember build --env=production; cd ..
RUN cd iccmobile-server; npm install; cp -r ../iowacodecamp-mobile/dist public

EXPOSE  8080

CMD ["node", "/iccmobile/iccmobile-server/index.js"]
