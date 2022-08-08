

from time import sleep
import nltk


def func():
    srcfile = f"script/src/text"
    with open("script/src/text/2009年历年考研英语真题.txt", "r", encoding="utf-8") as file:
        content = file.read()
        contents = content.split(sep="\n\n")
        for i in contents:
            if(len(i)>1):
                sleep(0.1)
                print(i)


func()
