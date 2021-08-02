#!/bin/bash
DOMAIN_NAME="rockykamenrubio.com"
ROCKY_ACCOUNT_ID="732271731638"
RASPUTIN_ACCOUNT_ID="732271731638"
UNBIND_ACCOUNT_ID="732271731638"
DOMAIN_ACCOUNT_ID="423681736106"
#echo $DOMAIN_NAME
#echo $ACCOUNT_ID



#aws route53domains list-domains --region us-east-1

#aws route53domains get-domain-detail --domain-name $DOMAIN_NAME --region us-east-1

aws route53domains transfer-domain-to-another-aws-account --region us-east-1 --domain-name $DOMAIN_NAME --account-id $ROCKY_ACCOUNT_ID
