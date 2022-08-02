import os
import sys
import docx2txt


def convertdocxtotext(src, dst):
    print(src)
    print(dst)
    text = docx2txt.process(src)
    with open(dst, "w", encoding="utf-8") as text_file:
        text_file.write(text)
        text_file.close()


# files, filepath, srcpath, dstpath
# 通过文件系统参数获得文件名, 然后进行处理
filepath = sys.argv[1]
files = os.listdir(filepath)

for file in files:
    filewithdocx = os.path.join(filepath, file)
    # print(filewithdocx)
    farpath = os.path.dirname(filepath)
    truename = os.path.splitext(file)
    dstpath = truename[0]+".txt"
    dstpath = os.path.join(farpath, "text", dstpath)
    convertdocxtotext(filewithdocx, dstpath)


sys.exit()


print(file)

dstpath = "text"
print(dstpath)

if not os.path.exists(dstpath):
    os.mkdir(dstpath)

dstfile = os.path.join(dstpath, "output.txt")


# with open(dstfile, "w", encoding="utf-8") as text_file:
#     text_file.write(text)
