#Find percentage of you marks

SubjectsNumber = int(input("Enter the number of subjects you have : "))
SubjectMark = int(input("Enter the total mark of the subject: "))


TotalMark = SubjectsNumber * SubjectMark
MarksObtained = 0


while SubjectsNumber != 0:

	marks = int(input("\nEnter Marks: "))
	if marks > SubjectMark:
		print("You have enter an invalid mark!!")
		continue


	MarksObtained += marks 
	SubjectsNumber -= 1

Percentage = "{:.2f}".format(MarksObtained * 100 / TotalMark)

print(f"You have got {Percentage}%")
