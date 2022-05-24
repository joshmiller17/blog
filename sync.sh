#!/bin/bash
htmls=("about" "tutorials" "blog" "poetry" "portfolio" "research" "credits" "allworks" "cta" "whist" "recipes/hotblood" "recipes/butter-bread" "player-groups" "dan-power")
if [ -z "$1" ];
	then
		aws s3 sync . s3://joshaaronmiller.com --exclude ".git*"
		for i in "${htmls[@]}"
		do
		  aws s3 mv s3://joshaaronmiller.com/$i.html s3://joshaaronmiller.com/$i
		done
else
	aws s3 cp $1.html s3://joshaaronmiller.com/$1.html
	if [[ "index" != $1 ]]
	then
	aws s3 mv s3://joshaaronmiller.com/$1.html s3://joshaaronmiller.com/$1
	fi
fi

