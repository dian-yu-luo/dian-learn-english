import os
import sys
import docx2txt


# files, filepath, srcpath, dstpath

# 通过文件系统参数获得文件名, 然后进行处理
filepath = sys.argv[1]
files = os.listdir(filepath)
# for i in files:
#     print(i)


file = files[1]
file=os.path.join(filepath,file)
print(file)
text=docx2txt.process(file)

dstpath = "text"
farpath = os.path.dirname(filepath)
dstpath = os.path.join(farpath, dstpath)
print(dstpath)

if not os.path.exists(dstpath):
    os.mkdir(dstpath)

dstfile = os.path.join(dstpath, "output.txt")


with open(dstfile, "w", encoding="utf-8") as text_file:
    text_file.write(text)
