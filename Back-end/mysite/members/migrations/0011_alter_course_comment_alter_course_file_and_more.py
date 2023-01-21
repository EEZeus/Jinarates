# Generated by Django 4.1.5 on 2023-01-20 13:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0010_alter_universityprofile_comments_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='members.comments'),
        ),
        migrations.AlterField(
            model_name='course',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='resourses'),
        ),
        migrations.AlterField(
            model_name='course',
            name='score',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='professor',
            name='courses',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='members.course'),
        ),
        migrations.AlterField(
            model_name='professor',
            name='score',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]