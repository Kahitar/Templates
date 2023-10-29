from flask import render_template, url_for, redirect, request, Blueprint, request
from template_name.main.forms import SearchForm
from template_name.models import User


main = Blueprint('main', __name__)


@main.route("/")
@main.route("/home")
def home(active_template_name_id=None):
    home_user = User.query.filter_by(username="Sologesang").first()
    if home_user:
        username = home_user.username
    else:
        username = User.query.first().username
    return redirect(url_for('users.profile', username=username))


@main.route("/admin", methods=["GET", "POST"])
def admin():
    search_form = SearchForm()
    if search_form.validate_on_submit():
        search_term = search_form.query.data
        if search_term == "":
            users = User.query.all()
        else:
            users = User.query.filter(User.username.contains(search_term))
        return render_template('admin_console.html', search_form=search_form, users=users)
    all_users = User.query.all()
    return render_template('admin_console.html', search_form=search_form, users=all_users)


@main.route("/about")
@main.route("/impressum")
def impressum():
    return render_template('about.html')
