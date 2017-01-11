#!/bin/sh

echo Google API Key
read -r googleApiKey

GOOGLE_API_IOS_KEY="name=\"API_KEY_FOR_IOS\" value=\""
GOOGLE_API_ANDROID_KEY="name=\"API_KEY_FOR_ANDROID\" value=\""

sed -i "s@$GOOGLE_API_IOS_KEY.*@$GOOGLE_API_IOS_KEY$googleApiKey\" />@" topcar_ionic/config.xml
sed -i -e "s@$GOOGLE_API_ANDROID_KEY.*@$GOOGLE_API_ANDROID_KEY$googleApiKey\" />@" topcar_ionic/config.xml

read -n1 -r -p "Press any key to continue..." key