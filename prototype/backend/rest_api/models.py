from django.db import models

class SearchRequest(models.Model):
    month = models.CharField(max_length=200)
    year = models.PositiveIntegerField()
    wikipedia_results = models.JSONField(default=dict)

    def __str__(self):
        return (str(self.month) + ' ' + str(self.year))