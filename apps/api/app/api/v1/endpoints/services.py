from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_services():
    return {'status': 'ok'}
