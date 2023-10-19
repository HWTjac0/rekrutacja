import json


class Importer:

    def __init__(self):
        self.tasks = []
    def read_tasks(self):
        self.tasks = json.load(open("./taski.json", "r"))
    def get_tasks(self):
        return self.tasks
