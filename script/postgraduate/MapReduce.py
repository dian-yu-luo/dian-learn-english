import docx2txt

# Passing docx file to process function
text = docx2txt.process("test.docx")

# Saving content inside docx file into output.txt file
with open("output.txt", "w", encoding="utf-8") as text_file:
    text_file.write(text)
