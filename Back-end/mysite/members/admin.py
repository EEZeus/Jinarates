from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Comments, Course, Professor, StudentProfile, UniversityProfile
# Register your models here.

admin.site.register(Comments)
admin.site.register(Course)
admin.site.register(Professor)
admin.site.register(StudentProfile)
admin.site.register(UniversityProfile)

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    add_fieldsets = (
        (None, {
            'classes' : ('wide',),
            'fields' : ('username', 'password1', 'password2', 'email',),
        }),
    )

