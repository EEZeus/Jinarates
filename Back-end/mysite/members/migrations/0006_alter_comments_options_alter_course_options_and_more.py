# Generated by Django 4.1.5 on 2023-01-20 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0005_alter_baseprofile_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comments',
            options={'ordering': ['user']},
        ),
        migrations.AlterModelOptions(
            name='course',
            options={'ordering': ['score', 'name']},
        ),
        migrations.AlterModelOptions(
            name='professor',
            options={'ordering': ['score']},
        ),
        migrations.AlterModelOptions(
            name='studentprofile',
            options={'ordering': ['user__first_name', 'user__last_name']},
        ),
        migrations.AlterModelOptions(
            name='universityprofile',
            options={'ordering': ['name']},
        ),
        migrations.AddField(
            model_name='course',
            name='name',
            field=models.CharField(default=None, max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='universityprofile',
            name='name',
            field=models.CharField(default=None, max_length=150),
            preserve_default=False,
        ),
    ]
