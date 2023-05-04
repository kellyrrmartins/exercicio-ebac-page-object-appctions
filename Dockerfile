FROM cypress/included:latest

WORKDIR /home/cypress

RUN apt-get update

# RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -

# RUN apt-get -yq update \
#     && apt-get -yq upgrade \
#     && apt-get install -yq nodejs \
#     && npm --version



COPY . /home/cypress

VOLUME [ "/home/cypress/mochawesome-report" ]

RUN  npm prune
RUN  npm cache clean — force

RUN npm install

CMD [ "npm", "run", "test" ]