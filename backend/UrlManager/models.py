from django.db import models

class UrlManager(models.Model):
    key = models.AutoField(primary_key=True, editable=False)
    url = models.URLField()
    created = models.DateTimeField()
    lastModified = models.DateTimeField()

    def _str_(self):
        return self.url