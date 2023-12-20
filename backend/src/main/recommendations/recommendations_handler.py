from flask import Flask, request, jsonify, Blueprint
from main.recommendations.recommendations_manager import RecommendationsManager
import dataclasses

recs_manager = RecommendationsManager()
recs_bp = Blueprint('recommendations', __name__)
class RecommendationsHandler:

    @recs_bp.route("/generate",methods=['GET', 'POST'])
    def handle_recommendations():
        # Get data from the request JSON

        if request.method == 'GET':
            user = request.args.get("user")
            
        elif request.method == 'POST':
            data = request.get_json()
            user = data.get("user")
          

        # Generate recommendations
        recommendations = recs_manager.generate_recommendations(user)
        result_dict = ({"result": "success", "recommendations":recommendations})
        
        # Return the recommendations as JSON
        return jsonify(result_dict)
