# import os
# import subprocess
# import tempfile

# def is_git_installed():
#     """Check if Git is installed and accessible."""
#     try:
#         subprocess.run(["git", "--version"], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         return True
#     except FileNotFoundError:
#         print("Error: Git is not installed or not in the PATH.")
#         return False

# def find_empty_files(repo_url):
#     """
#     Clone a GitHub repository and find the empty files.

#     :param repo_url: The URL of the GitHub repository to analyze.
#     :return: A list of paths to empty files, or None if an error occurs.
#     """
#     # Ensure Git is installed
#     if not is_git_installed():
#         return None

#     # Check if the URL is valid (basic validation)
#     if not repo_url.startswith("https://github.com/"):
#         print("Error: Please provide a valid GitHub repository URL.")
#         return None

#     # Create a temporary directory to clone the repository
#     with tempfile.TemporaryDirectory() as temp_dir:
#         try:
#             # Clone the repository into the temporary directory
#             print("Cloning repository...")
#             subprocess.run(["git", "clone", repo_url, temp_dir], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

#             # Walk through the cloned repository and find empty files
#             empty_files = []
#             for root, _, files in os.walk(temp_dir):
#                 for file in files:
#                     file_path = os.path.join(root, file)
#                     if os.path.getsize(file_path) == 0:  # Check if file is empty
#                         empty_files.append(os.path.relpath(file_path, temp_dir))

#             return empty_files
#         except subprocess.CalledProcessError as e:
#             print("Error cloning the repository:", e)
#             return None
#         except Exception as e:
#             print("An unexpected error occurred:", e)
#             return None

# if __name__ == "__main__":
#     repo_url = input("Enter the GitHub repository URL: ").strip()
#     empty_files = find_empty_files(repo_url)
#     if empty_files is not None:
#         if empty_files:
#             print(f"Empty files found: {len(empty_files)}")
#             for file in empty_files:
#                 print(f"- {file}")
#         else:
#             print("No empty files found.")
#     else:
#         print("Failed to analyze the repository.")
        
        
        
        
