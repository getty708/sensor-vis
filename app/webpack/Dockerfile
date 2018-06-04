FROM node:7.9.0

WORKDIR /app


RUN npm install -g webpack webpack-cli
#RUN npm init -y
COPY package.json /app/package.json
RUN npm install
#RUN npm install --save react react-dom
#RUN npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

# Install Emacs
RUN apt-get update
RUN apt-get install emacs24-nox -y
# Settings of Git
RUN apt-get install git -y
RUN git config --global core.editor 'emacs -nw'


# Make Director
WORKDIR /app
