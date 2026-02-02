from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "drone_maven_secret"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "POST":
        session["user"] = request.form["email"]
        return redirect("/dashboard")
    return render_template("login.html")

@app.route("/dashboard")
def dashboard():
    if "user" not in session:
        return redirect("/login")
    return render_template("dashboard.html")

@app.route("/motor", methods=["GET","POST"])
def motor():
    if "user" not in session:
        return redirect("/login")
    result = None
    if request.method == "POST":
        weight = float(request.form["weight"])
        motors = int(request.form["motors"])
        result = f"Required thrust per motor ≈ {(weight*2)/motors:.1f} g"
    return render_template("motor.html", result=result)

@app.route("/propeller")
def propeller():
    if "user" not in session:
        return redirect("/login")
    return render_template("propeller.html")

@app.route("/flight", methods=["GET","POST"])
def flight():
    if "user" not in session:
        return redirect("/login")
    result = None
    if request.method == "POST":
        cap = float(request.form["capacity"])
        cur = float(request.form["current"])
        result = f"Flight time ≈ {(cap/1000)/cur*60:.1f} min"
    return render_template("flight.html", result=result)

@app.route("/weight", methods=["GET","POST"])
def weight():
    if "user" not in session:
        return redirect("/login")
    result = None
    if request.method == "POST":
        payload = float(request.form["payload"])
        result = f"Total takeoff weight ≈ {payload + 1200} g (frame + electronics)"
    return render_template("weight.html", result=result)

@app.route("/delivery", methods=["GET","POST"])
def delivery():
    if "user" not in session:
        return redirect("/login")
    result = None
    if request.method == "POST":
        payload = float(request.form["payload"])
        result = "Use 10–13 inch props with 4S battery"
    return render_template("delivery.html", result=result)

@app.route("/formula")
def formula():
    if "user" not in session:
        return redirect("/login")
    return render_template("formula.html")

if __name__ == "__main__":
    app.run(debug=True)
