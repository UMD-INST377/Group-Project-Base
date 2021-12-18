#! /bin/sh

echo "Pick a file to add"
read file

while [ $file != "done" ]
do
    echo "Adding: $file"
    git add $file

    echo "Pick another file to add, type \"done\" if done"
    read file
done

echo "enter commit message"
read message
git commit -am "$message"

echo "Which Branch Would You like to Push?"
read Branch
git push origin $Branch

