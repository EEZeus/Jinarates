# Generated by Django 4.1.5 on 2023-01-20 13:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0007_alter_universityprofile_comments_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='universityprofile',
            name='comments',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='members.comments'),
        ),
    ]
