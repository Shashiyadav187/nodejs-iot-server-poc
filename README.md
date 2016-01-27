# Node.js IoT server POC

## Abstract
This is a Proof of Concept of a Internet of Things Wifi Server based on Node.js using MongoDB as broker through MQTT protocol. Node.js offers the opportunity of being deployed in most platforms to perform as a broker inside a Local Access Network (Wi-Fi in this case of use) to deal with and communicate diverse hardware devices and software applications with each others using Message Queue Telemetry Transport (MQTT) protocols. By this way, it is possible to stablish a local Internet of Things ecosystem through existing Local Access Network to communicate and interoperate IoT devices.

## Implementation
This Node.js server will register clients using MQTT protocol allowings them to subscribe and publish messages to a certain resource/address. To test functionality and feasibility, two ESP8266 devices will be connected as clients to subscribe and and publish testing messages.

## Results and Conclusions
Node.js with Mosca proved to be a light, fast and ease solution. There was no data lost or fail cases by now.

## Dependencies
[Mosca](https://github.com/mcollina/mosca) (MQTT broker as a module) by [Matteo Collina](https://github.com/mcollina)
