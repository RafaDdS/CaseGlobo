# Generated by Django 4.2.16 on 2024-09-29 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UrlManager',
            fields=[
                ('key', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('url', models.URLField()),
                ('created', models.DateTimeField()),
                ('lastModified', models.DateTimeField()),
            ],
        ),
    ]
