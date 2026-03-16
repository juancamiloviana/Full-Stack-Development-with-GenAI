// object in literal style

let product1 = {pid:100, pname:"TV",pprice:15000,pqty:10}
document.write("<br/>------ Product Details ------")
document.write("<br/> Pid is "+product1.pid)
document.write("<br/> PName is "+product1.pname)
document.write("<br/> PPrice is "+product1.pprice)
document.write("<br/> PQty is "+product1.pqty)

//objetc in literal style with complex property

let emp1 = {eid:1,ename:"Bob",eage:21,skillSet:["Java","Python","JS"], 
    adress:{city:"New York", state:"NY"},
    project:[
        {prid:1122, tech:"Java"},
        {prid:1123, tech:"Python"},
        {prid:1124, tech:"JS"}
    ]}
document.write("<br/>------ Employee Details ------")
document.write("<br/> Id is "+emp1.eid)
document.write("<br/> Name is "+emp1.ename)
document.write("<br/> Age is "+emp1.eage)
document.write("<br/> SkillSet is "+emp1.skillSet)
document.write("<br/>-- All skill information one by one --")
emp1.skillSet.forEach(skill=>document.write("<br/> Skill "+skill))
document.write("<br/> City is " + emp1.adress.city)
document.write("<br/> Sate is " + emp1.adress.state)
document.write("<br/> Display 1 index position skillset: "+emp1.skillSet[1])
document.write("<br/> 3rd Project Technology: "+emp1.project[2].tech)
emp1.project.forEach(pro=>document.write("<br/> Pid: "+pro.prid+" Tech: "+pro.tech))
