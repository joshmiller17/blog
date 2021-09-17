with open("js/cta-flowchart.json") as f:
    line_num = 0
    brackets_open = []
    braces_open = []
    last_symbol = ''
    dup_count = 0
    for line in f.readlines():
        line_num += 1
        print(brackets_open, braces_open)
        for w in line:
           
            if w == "[":
                if last_symbol == "[":
                    print("\n\nWARN: doubled bracket on line " + str(line_num) + "\n\n")
                    input()
                brackets_open.append(line_num)
                last_symbol = "[" 
                dup_count = 0
            if w == "{":
                if last_symbol == "{":
                    dup_count += 1
                    if dup_count > 1:
                        print("\n\nWARN: tripled brace on line " + str(line_num) + "\n\n")
                        input()
                braces_open.append(line_num)
                last_symbol = "{"
                dup_count = 0
            if w == "]":
                last_symbol = "]"
                dup_count = 0
                try:
                    brackets_open.pop()
                except:
                    print("Negative brackets on line " + str(line_num))
                    exit()
            if w == "}":
                last_symbol = "}"
                dup_count = 0
                try:
                    braces_open.pop()
                except:
                    print("Negative braces on line " + str(line_num))
                    exit()
    print(brackets_open, braces_open)