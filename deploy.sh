#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")

service kibana stop
rm -rf /usr/share/kibana/optimize/*
rm -rf /usr/share/kibana/plugins/kibana-html-plugin/
cp -R $SCRIPTPATH /usr/share/kibana/plugins/kibana-html-plugin
service kibana start
