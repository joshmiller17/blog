#!/bin/bash
aws s3 sync . s3://joshaaronmiller.com --exclude ".git*"
htmls=("about" "blog" "poetry" "portfolio" "research" "credits" "allworks")
for i in "${htmls[@]}"
do
  aws s3 mv s3://joshaaronmiller.com/$i.html s3://joshaaronmiller.com/$i
done
