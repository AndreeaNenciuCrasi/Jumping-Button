from flask import Flask, render_template,request, make_response, redirect, url_for
app = Flask(__name__)

@app.route('/')
@app.route('/question-with-one-answer')
def index():
    return render_template('index.html')


@app.route('/the-question')
def the_question():
    input_textarea = request.args.get('comment')
    input_answer = request.args.get('answer')
    return render_template('question.html', input_textarea=input_textarea, input_answer=input_answer)


if __name__ == '__main__':
    app.run(debug=True)
