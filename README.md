# AWS API Gateway를 커스텀 도메인으로 배포하는 방법을 소개합니다.

## 한국어 설명

## 사전 조건

1. Route53을 통해 Domain을 구입 혹은 보유 중
2. AWS ACM을 통해 사용할 서브도메인에 대한 SSL/TLS 인증서를 발급 받은 상태이어야 함.
3. 배포를 하기 위해 aws-cli 및 serverless 가 사용자의 로컬 머신, 혹은 배포를 하는 머신에 설치되어있어야 함.
4. 자신의 aws credential이 `~/.aws/` 밑에 설정 되어 있어야 함

## 사용한 플러그인

- serverless-add-api-key
- serverless-domain-manager

## 디테일한 내용 작성 예정

## English

## Prerequiste

1. Must buy or have a domain through `Route53`
2. Must have or get a SSL/TLS certificate through `AWS ACM`
3. `aws-cli` and `serverless` must be set up on your local machine or deploying machine for depyoing this example.
4. `aws credential` - aws access key, secret key - must be set up your deploying machine.

## Plugins

- serverless-add-api-key
- serverless-domain-manager

## WIP