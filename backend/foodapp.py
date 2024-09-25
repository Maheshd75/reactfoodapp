from flask import Flask, request , jsonify,send_from_directory,session
from pymongo import MongoClient 
from bson.json_util import dumps, loads
from flask_cors import CORS
from flask_session import Session
from bson.objectid import ObjectId
import os
app = Flask(__name__) 



app.config["SECRET_KEY"] ='dhhgjdjddjdtjsdttjdjdjdtdbdbdfnbdgghghngnbgnngbnfgngfdjd'
app.config["SESSION_COOKIE_SAMESITE"] = "none"
app.config["SESSION_COOKIE_SECURE"] = True
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"

app.config["UPLOAD-DIRECTORY"] = '/Users/daram/reactfoodapp/backend/uploads/'
Session(app)
CORS(app, )
# root route 
@app.route('/') 
def hello_world(): 
	return 'Hello, World!'

# Set up MongoDB connection and collection 
client = MongoClient('mongodb://localhost:27017/') 

# Create database named demo if they don't exist already 
db = client['demo'] 

# Create collection named data if it doesn't exist already 
collection = db['fooddata'] 

# Add data to MongoDB route 
@app.route('/add_data', methods=['POST','GET']) 
def add_data():

	id = request.form['id']
	file = request.files['file']
	name = request.form['name']
	restaurant = request.form['restaurant']
	text= request.form['text']
	catogery = request.form.get('catogery')
	price= request.form.get('price')
	
	if file:
			file.save(os.path.join(app.config["UPLOAD-DIRECTORY"],file.filename))
			
	data = {
		      "id":id,
	         "image":file.filename,
			 "name":name,
			 "restaurant":restaurant,
			 "text":text,
			 "category":catogery,
			 "price":price,
			 "Quantity":1

		    }

	collection.insert_one(data)
	
	return "added"
@app.route("/login", methods=["POST", "GET"])
def login():
	if request.method=='POST':
		email1 = request.form['email']
		password = request.form['password']
		collection = db['user']
		data = collection.find_one( {"email":email1,"password":password} )
		print(data)
		if data:
			usernamedata = {
				"username":data['name'],
				"email":data['email']
				}
			session['loggedin']=True
			session['name']=data['name']
			session['email']=data['email']
			
				    
			collection=db['sessions']
			collection.insert_one(usernamedata)
			return "logged in"
			
		#	if "name" in session:
			#	print(session)
		#		return session['name']
		
		return "Invalid ceredentials"
		
		#list_cur=list(data)
		#json_data = dumps(list_cur)
@app.route('/get_session',methods=['GET'])
def get_session():
	collection=db['sessions']
	
	username = collection.find()
	if username:
		list_cur=list(username)
		json_data = dumps(list_cur)
		print(username)
		return  json_data
	return ''
#@app.route('/set_session',methods=["POST",'GET'])
#def set_session():
	#session['name']	="success"
	#return session['name']	
	
@app.route("/logout",methods=["POST","GET"])
def logout():
	collection=db['sessions']
	collection.delete_many({})
	session.pop('loggedin', None)
	session.pop('name', None)
	session.pop('email', None)
	return "logged out"
		

@app.route("/signup", methods=["POST", "GET"])
def signup():
	name = request.form['name']
	email = request.form['email']
	password = request.form['password']
	collection = db['user']
	data = collection.find_one( {"email":email,"password":password} )
	
	if data:
		return "Account already exits"
	data = {
		     "name":name,
		     "email":email,
		     "password":password
	}
	        
	
	collection.insert_one(data)
	return "Signedup"



@app.route('/get_data',methods=['GET'])
def get_data():
	data = collection.find()
	list_cur=list(data)
	json_data = dumps(list_cur)
	return json_data
@app.route('/get_image/<filename>',methods=['GET'])
def get_image(filename):
	return send_from_directory(app.config["UPLOAD-DIRECTORY"],filename)

@app.route('/add_orders',methods=['POST','GET'])
def add_orders():
	data= request.json
	collection=db['orders']
	collection.insert_one(data)
	print(data)
	return "success"
@app.route('/get_orders',methods=['GET'])	
def get_orders():
	collection = db['orders']
	data = collection.find()
	list_cur = list(data)
	json_data = dumps(list_cur)
	return json_data
@app.route('/remove_data',methods=['POST','GET'])
def remove_data():
	if request.method=='POST':
		data = request.json
		id = data.get('_id')
		id1 = id.get('$oid')
		collection.delete_one( {'_id':ObjectId(id1)} )
		
		
		return "removed"
@app.route('/update_orderstatus',methods=['POST','GET'])
def update_orderstatus():
	if request.method=='POST':
		data=request.json
		item = data.get('itemid')
		item1=data.get('item')
		id = item1.get('_id')
		id1 = id.get('$oid')
		status=data.get('status')
		collection=db['orders']
		data1 = collection.update_one( {'_id':ObjectId(item),'item._id.$oid':id1},{'$set':{'item.$.status':status}} )
		
		return "updated"

	


	 
    
if __name__ == '__main__': 
	app.run(debug=True) 