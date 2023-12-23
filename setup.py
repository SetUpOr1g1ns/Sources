import subprocess
import os
import shutil
import sys
import winreg

# Step 1: Create a Python script
python_script = """
print("Hello, Windows! This is my Python app.")
"""

with open('my_app.py', 'w') as file:
    file.write(python_script)

# Step 2: Create a Batch Script
batch_script = """
@echo off
python my_app.py
pause
"""

with open('run_my_app.bat', 'w') as file:
    file.write(batch_script)

# Step 3: Create a Shortcut
# You can use pywin32 to create a desktop shortcut
import win32com.client

shell = win32com.client.Dispatch("WScript.Shell")
shortcut = shell.CreateShortCut("C:\\Users\\YourUsername\\Desktop\\MyApp.lnk")
shortcut.Targetpath = os.path.abspath("run_my_app.bat")
shortcut.WorkingDirectory = os.path.abspath(".")
shortcut.save()

# Step 4: Auto-Start with Windows (Optional)
# Add the batch script shortcut to the Windows Startup folder
startup_folder = os.path.join(os.getenv('APPDATA'), 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup')
shutil.copy("run_my_app.bat", startup_folder)

# Clean up: Remove temporary Python script and batch script
os.remove('my_app.py')
os.remove('run_my_app.bat')

print("Setup complete.")
