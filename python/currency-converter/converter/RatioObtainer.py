import json, datetime, urllib.request, os


class RatioObtainer:
    base = None
    target = None

    def __init__(self, base, target):
        self.base = base
        self.target = target

    def was_ratio_saved_today(self):
        # TODO
        # This function checks if given ratio was saved today and if the file with ratios is created at all
        # should return false when file doesn't exist or if there's no today's exchange rate for given values at all
        # should return true otherwise
        if not os.path.exists("./ratios.json"):
            return False
        ratios = json.load(open("./ratios.json", "r"))
        for ratio in ratios:
            if self.match_entry(ratio["base_currency"], ratio["target_currency"], ratio["date_fetched"]):
                return True
        return False
    def match_entry(self, base, target, date):
        return base == self.base and target == self.target and date == datetime.datetime.today().strftime("%Y-%m-%d")
    def fetch_ratio(self):
        # TODO
        # This function calls API for today's exchange ratio
        # Should ask API for today's exchange ratio with given base and target currency
        # and call save_ratio method to save it
        access_key = "KLUCZ_API DO EXCHANGERATE.HOST" 
        res = urllib.request.urlopen(f"http://api.exchangerate.host/convert?from={self.base}&to={self.target}&amount=1&access_key={access_key}")
        data = json.loads(res.read())
        ratio = float(data["result"])
        self.save_ratio(ratio)

    def save_ratio(self, ratio):
        # TODO
        # Should save or update exchange rate for given pair in json file
        # takes ratio as argument
        # example file structure is shipped in project's directory, yours can differ (as long as it works)
       if not os.path.exists("./ratios.json"):
           with open("./ratios.json", "r+") as f:
               f.write("[]")
       ratios = json.load(open("./ratios.json", "r"))
       current_date = datetime.datetime.today().strftime("%Y-%m-%d")
       for ratio in ratios:
           if ratio["date_fetched"] == current_date and ratio["ratio"] != ratio:
               ratio["ratio"] = ratio
               break
       else:
        ratios.append({
            "base_currency": self.base,
            "target_currency": self.target,
            "date_fetched": current_date, 
            "ratio": ratio 
            })
        with open("./ratios.json", "w") as f:
             json.dump(ratios, f, indent=4)

    def get_matched_ratio_value(self):
        # TODO
        # Should read file and receive exchange rate for given base and target currency from that file
        ratios = json.load(open("./ratios.json", "r"))
        for ratio in ratios:
            if self.match_entry(ratio["base_currency"], ratio["target_currency"], ratio["date_fetched"]):
                return ratio["ratio"]

