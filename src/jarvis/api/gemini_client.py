"""Gemini AI Client Module - Direct HTTP API Version"""
import requests
import json
from jarvis.config.settings import GEMINI_API_KEY, GEMINI_MODEL

# Gemini API endpoint
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"


def process_prompt(prompt):
    """
    Process a prompt using Gemini AI via direct HTTP API

    Args:
        prompt (str): The user's prompt/question

    Returns:
        str: The AI's response or error message
    """
    if not GEMINI_API_KEY:
        return "Error: API key not configured. Please set GEMINI_API_KEY environment variable."

    try:
        headers = {
            'Content-Type': 'application/json',
        }

        data = {
            "contents": [{
                "parts": [{
                    "text": prompt
                }]
            }]
        }

        params = {
            'key': GEMINI_API_KEY
        }

        response = requests.post(GEMINI_URL, headers=headers, params=params, json=data, timeout=30)

        if response.status_code == 200:
            result = response.json()
            # Extract the text from the response
            if 'candidates' in result and len(result['candidates']) > 0:
                candidate = result['candidates'][0]
                if 'content' in candidate and 'parts' in candidate['content']:
                    parts = candidate['content']['parts']
                    if len(parts) > 0 and 'text' in parts[0]:
                        return parts[0]['text']

            return "Error: Unexpected response format from Gemini API"

        elif response.status_code == 400:
            return "Error: Bad request. Please check your prompt."
        elif response.status_code == 401:
            return "Error: Invalid API key. Please check your GEMINI_API_KEY."
        elif response.status_code == 403:
            return "Error: API key does not have permission to access this resource."
        elif response.status_code == 429:
            return "Error: Rate limit exceeded. Please try again later."
        else:
            return f"Error: Gemini API returned status code {response.status_code}"

    except requests.exceptions.Timeout:
        return "Error: Request timed out. Please try again."
    except requests.exceptions.ConnectionError:
        return "Error: Could not connect to Gemini API. Check your internet connection."
    except Exception as e:
        return f"An error occurred: {str(e)}"


def is_api_configured():
    """Check if API is properly configured"""
    return bool(GEMINI_API_KEY)


