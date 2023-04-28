# ESL Talks Backend

## Run locally

1. Install Python (>=3.8)

2. Create and activate a Python virtual environment
   ```bash
   $ cd /path/to/ESLTalks/backend
   $ python3 -m venv .venv     # Create a virtual env
   $ source .venv/bin/activate # Activate a virtual env
   ```
   
3. Install dependencies
   ```bash
   (.venv) $ pip install -r backend/requirements.txt
   ```

4. Apply migrations to database
   ```bash
   (.venv) $ python manage.py migrate
   ```

5. Create a `.env` (stores environment variables) file in the root of the backend folder.
   The `.env` file content:
   ```
   SECRET_KEY=Your Django Secret Key
   ```

6. Run the backend project
   ```bash
   (.venv) $ python manage.py runserver
   ```
